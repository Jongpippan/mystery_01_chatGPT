(() => {
  const files = [
    'src/data/part01.js',
    'src/data/part02.js',
    'src/data/part03.js',
    'src/data/part04.js',
    'src/data/part04b.js',
    'src/data/part05.js',
    'src/data/part06.js',
    'src/data/part07.js',
    'src/data/part08.js',
    'src/data/part08b.js',
    'src/data/part09.js',
    'src/data/part10.js',
    'src/data/part11.js',
    'src/data/part12.js',
    'src/data-tail/tail01.js',
    'src/data-tail/tail02.js',
    'src/data-tail/tail03.js',
    'src/data-tail/tail04.js',
    'src/data-tail/tail05.js',
    'src/data-tail/tail06.js',
    'src/data-tail/tail07.js',
    'src/data-tail/tail08.js',
    'src/data-tail/tail09.js',
    'src/data-tail-safe/tail10a.js',
    'src/data-tail-safe/tail10b.js',
    'src/data-tail-safe/tail11a.js',
    'src/data-tail-safe/tail11b.js',
    'src/data-tail-safe/tail12a.js',
    'src/data-tail-safe/tail12b.js',
    'src/data-tail-safe/tail13a.js',
    'src/data-tail-safe/tail13b.js',
    'src/data-tail-safe/tail14a.js',
    'src/data-tail-safe/tail14b.js',
    'src/data-tail-safe/tail15a.js',
    'src/data-tail-safe/tail15b.js',
    'src/data-tail-safe/tail16a.js',
    'src/data-tail-safe/tail16b.js',
    'src/data-tail-safe/tail17a.js',
    'src/data-tail-safe/tail17b.js',
    'src/data-tail-safe/tail18a.js',
    'src/data-tail-safe/tail18b.js',
    'src/data-tail-safe/tail19a.js',
    'src/data-tail-safe/tail19b.js',
    'src/data-tail-safe/tail20a.js',
    'src/data-tail-safe/tail20b.js',
    'src/data-tail-safe/tail21a.js',
    'src/data-tail-safe/tail21b.js',
    'src/data-tail-safe/tail22a.js',
    'src/data-tail-safe/tail22b.js',
    'src/data-tail-safe/tail23a.js',
    'src/data-tail-safe/tail23b.js',
    'src/runtime-safe/part01.js',
    'src/runtime-safe/part02.js',
    'src/runtime-safe/part03.js',
    'src/runtime-safe/part04.js',
    'src/runtime-safe/part05.js',
    'src/runtime-safe/part06.js',
    'src/loader.js',
  ];
  const load = src => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`파일을 불러오지 못했습니다: ${src}`));
    document.body.appendChild(script);
  });
  (async () => {
    try { for (const file of files) await load(file); }
    catch (error) {
      document.body.innerHTML = `<main style="max-width:720px;margin:80px auto;padding:24px;color:#eee;background:#171510;font-family:system-ui"><h1 style="font-size:28px">게임 파일을 불러오지 못했습니다.</h1><p>${String(error.message || error)}</p></main>`;
      console.error(error);
    }
  })();
})();
