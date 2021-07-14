import p5 from 'p5';

const width = 1600;
const height = 1600;

const sketch = (s) => {
  function w(val) {
    if (val == null) return width;
    return width * val;
  }

  function h(val) {
    if (val == null) return height;
    return height * val;
  }

  function makeCircle(numSides, radius) {
    const points = [];
    const radiansPerStep = (Math.PI * 2) / numSides;
    for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);

      points.push([x, y]);
    }
    return points;
  }

  function distortPolygon(polygon) {
    return polygon.map((point) => {
      const x = point[0];
      const y = point[1];
      const distance = s.dist(0.5, 0.5, x, y);

      const noiseFn = (x, y) => {
        const noiseX = (x + 0.31) * distance * 2;
        const noiseY = (y - 1.73) * distance * 2;
        return s.noise(noiseX, noiseY, s.frameCount / 500);
      };

      const theta = noiseFn(x, y) * Math.PI * 2;

      const amountToNudge = 0.1;
      const newX = x + amountToNudge * Math.cos(theta);
      const newY = y + amountToNudge * Math.sin(theta);

      return [newX, newY];
    });
  }

  s.setup = () => {
    s.createCanvas(width, height, s.WEBGL);
  };

  s.draw = () => {
    s.background(255);
    s.stroke(0, 0, 0);
    s.noFill();
    s.strokeWeight(2);

    for (let radius = 0.05; radius < 0.5; radius += 0.04) {
      const circle = makeCircle(20, radius * 0.5);
      const distortedCircle = distortPolygon(circle);

      s.beginShape();
      distortedCircle.forEach((point) => {
        s.vertex(w(point[0]), h(point[1]));
      });
      s.endShape(s.CLOSE);

      s.rotateX(s.frameCount * 0.001);
      s.rotateY(s.frameCount * 0.001);
    }
  };
};

new p5(sketch, 'app');
