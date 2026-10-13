# 개인 프로필 웹사이트

## 로컬 실행

Node.js가 설치된 환경에서 프로젝트 폴더의 터미널로 실행합니다. 외부 패키지 설치나 `npm install`은 필요 없습니다.

```sh
npm start
```

브라우저에서 http://localhost:3000 을 엽니다. 종료는 `Ctrl+C`입니다.
다른 포트가 필요하면 `PORT=3001 npm start`로 실행합니다.

```text
public/          배포할 정적 웹사이트 (index.html, styles.css, script.js)
server.cjs       Node.js 기본 모듈을 사용하는 로컬 서버
stitch-export/   원본 디자인 참고 파일
tests/          동작 검사
package.json     실행 및 검사 명령
vercel.json      정적 배포 설정
```

웹사이트를 수정할 때는 `public/` 안의 파일을 편집하고 브라우저를 새로고침합니다.
기존 HTML, CSS, JavaScript 내용과 상대 경로는 유지했습니다.

## 검사

```sh
npm test
```

## Vercel 배포

프로젝트 루트를 Vercel 프로젝트로 연결합니다. 설정은 `vercel.json`에 포함되어 있습니다.

- Framework Preset: Other
- Build Command: 비워 두기 (빌드 불필요)
- Output Directory: public

Vercel에는 `public/`의 정적 파일만 배포됩니다. 로컬 서버는 배포 시 실행하지 않습니다.
이미지는 public/assets/의 로컬 파일을 사용합니다. 아이콘 폰트는 기존과 같이 외부 URL을 사용합니다.

설정 참고: https://vercel.com/docs/project-configuration/vercel-json
