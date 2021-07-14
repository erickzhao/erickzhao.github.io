async function main() {
  const res = await fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=erickzhao');
  const repos = await res.json();

  const list = document.getElementById('project-list');
  list.style = 'display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: 1fr; grid-column-gap: 16px; grid-row-gap: 16px;';

  for (const r of repos) {
    const { owner, repo, link, description, language, stars } = r;
    const listItem = document.createElement('a');
    listItem.href = link;
    listItem.classList = 'btn-erick';
    listItem.style = 'padding: 16px 16px 36px; background-color: white; color: black; border: 2px solid black;';
    listItem.innerHTML = `
      <p style="font-size: 20px;">${owner}/<strong style="font-weight:700">${repo}</strong></p>
      <p style="font-style: italic;">"${description.replace(/\p{Emoji}/gu, '')}"</p>
      <span style="text-align: right; position: absolute; right: 10px; bottom: 10px; font-size: 12px;"><strong>${language}</strong> // ${stars} ⭐️</span>
    `;
    list.appendChild(listItem);
  }
}

main();
