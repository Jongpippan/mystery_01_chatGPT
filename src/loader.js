(async () => {
  try {
    const gunzipText = async (base64) => {
      const raw = atob(base64 || '');
      const bytes = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
      if (!('DecompressionStream' in window)) throw new Error('이 브라우저는 압축 대본 로딩을 지원하지 않습니다. 최신 Chrome/Edge/Firefox/Safari에서 실행해 주세요.');
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
      return new Response(stream).text();
    };
    const contentParts = window.YEOWUL_PACK_PARTS || [];
    const runtimeParts = window.YEOWUL_GAME_PACK_PARTS || [];
    if (contentParts.length !== 51) throw new Error(`대본 조각 수가 올바르지 않습니다. (${contentParts.length}/51)`);
    if (runtimeParts.length !== 6) throw new Error(`게임 런타임 조각 수가 올바르지 않습니다. (${runtimeParts.length}/6)`);
    const json = await gunzipText(contentParts.join(''));
    const data = JSON.parse(json);
    if (data?.meta?.revision !== 'r03') throw new Error('대본 revision 검증에 실패했습니다.');
    if (Object.keys(data.evidence || {}).length !== 52) throw new Error('자료 목록 검증에 실패했습니다.');
    window.YEOWUL_DATA = data;
    const gameCode = await gunzipText(runtimeParts.join(''));
    (0, eval)(gameCode);
  } catch (error) {
    document.body.innerHTML = `<main style="max-width:720px;margin:80px auto;padding:24px;color:#eee;background:#171510;font-family:system-ui"><h1 style="font-size:28px">대본을 불러오지 못했습니다.</h1><p>${String(error.message || error)}</p><p>최신 브라우저에서 다시 실행해 주세요.</p></main>`;
    console.error(error);
  }
})();
