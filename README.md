# 여울관: 남겨 둔 자리

`YEOWUL-full-draft-r03.zip`을 기준으로 제작 중인 정적 브라우저 추리 게임입니다.

현재 저장소는 r03 대본을 gzip/base64 런타임 데이터로 분할해 로딩하며, 자료·인물·지도·대화 기록·메모·추리·힌트·저장을 지원합니다.

## 실행

정적 파일 서버에서 `index.html`을 여세요.

```sh
python -m http.server 8080
```

그 뒤 `http://localhost:8080`에 접속합니다.

## 구현 범위

- 메인 장면 106개 + 선택/조건 장면 18개
- 자료 E01–E52
- 인물 P00–P09
- 추리 D01–D30 + Q01–Q06
- H0–H4 단계 힌트 42세트
- 오답 반응 71개
- 지속 선택 `B_PR_01`, `B_PR_02`, `B_PLAYBACK_RESPONSE`, `B_EXHIBIT`, `B_SOUND`
- 브라우저 `localStorage` 자동 저장
- 자료 / 인물 / 지도 / 대화 기록 / 메모 / 설정 도구

## 대본 기준

본편은 사용자가 제공한 `YEOWUL-full-draft-r03.zip`을 기준으로 합니다. r03에 본문이 포함되지 않은 도입부 `C_PR_01`–`C_PR_05`만 r03가 명시적으로 참조하는 승인본 SHA-256 `fa68fb03126949332878567a521044667129b99a340ee4b2d1c727fa44fead45`와 일치하는 파일을 사용했습니다.

`Jongpippan/mystery` 저장소의 `project_01/game/content/source`는 감사 결과 PR-B01만 해당 기준과 일치하고 나머지 본편 파일은 다른 버전이므로 게임 대본 원본으로 사용하지 않습니다. 감사 결과는 `docs/r03-source-audit.json`, `docs/r03-history-audit.json`에 남겨 두었습니다.

## 검증

```sh
node tools/verify.mjs
node tools/simulate.mjs
node --check src/loader.js
```

현재 기계 검증은 전체 106개 메인 장면, 52개 자료, 36개 추리, 42개 힌트를 확인하고 기본 완주 시뮬레이션이 엔딩까지 도달하는지 검사합니다.

실제 브라우저의 시각 QA와 독립적인 사람의 첫 플레이 테스트는 별도 품질 게이트이며 자동 검증 통과와 동일하게 취급하지 않습니다.
