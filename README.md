# wanted-pre-onboarding-frontend

![react-icon](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![typescript-icon](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typeScript&logoColor=black)
![react-router-dom-icon](https://img.shields.io/badge/React%20Router%20Dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black)
![axios-icon](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black)
![tailwindcss-icon](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black)
![styled-components-icon](https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black)
![twin.macro-icon](https://img.shields.io/badge/twin.macro-b60ce0?style=for-the-badge&logo=twin.macro&logoColor=black)

<details>

<summary>진행 가이드</summary>

<br/>

- Create React App을 이용해 과제를 구현해주세요
- 함수 컴포넌트를 이용해서 진행해주세요
- UI는 지원자 개인이 생각했을 때 자연스러운 형태로 구현해주세요, UI는 평가에 영향을 미치지 않습니다.
- README.md 작성은 필수입니다. 아래의 사항은 반드시 포함되도록 해주세요
  - 프로젝트의 실행 방법
  - 데모 영상
  - 데모 영상은 배포 링크로 대체 가능하며, 배포가 되었고 배포된 사이트에서 기능이 모두 동작하면 가산점이 부여됩니다.
- 기능구현에 직접적으로 연관된 라이브러리 사용은 허용되지 않습니다.(React-Query 등)
- 사용가능한 라이브러리 목록은 아래와 같습니다.
  - React Router
  - HTTP Client 라이브러리(Axios 등)
  - 스타일링 관련 라이브러리(Sass, Styled Components, Emotion 등)
  - 아이콘 등 UI 관련 라이브러리(Font-Awesome, React-Icons, Bootstrap 등)
  - 기능과 직접적인 연관이 없는 설정관련 라이브러리(craco, dotenv 등)

</details>

## 프로젝트 구현 과제

<details>

<summary>1. 로그인 / 회원가입</summary>

## 구현 과제

### :: [1. 로그인 / 회원가입](https://github.com/SOPLAY/wanted-pre-onboarding-frontend/pull/1)

- [x] `/signup` 경로에 회원가입 기능을 개발해주세요
- [x] `/signin` 경로에 로그인 기능을 개발해주세요

  - [x] 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요

    - [x] 이메일 input에 `data-testid="email-input"` 속성을 부여해주세요
    - [x] 패스워드 input에 `data-testid="password-input"` 속성을 부여해주세요
    - [x] 회원가입 button에 `data-testid="signup-button"` 속성을 부여해주세요
    - [x] 로그인 button에 `data-testid="signin-button"` 속성을 부여해주세요

    ```html
    <!-- 예시 -->
    <input data-testid="email-input" />
    <input data-testid="password-input" />
    <button data-testid="signup-button">회원가입</button>
    ```

- 두 페이지의 UI는 동일해도 무방합니다.

#### Assignment 1

- [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위를 지양해주세요)

- [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요
- 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

#### Assignment 2

- [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요

#### Assignment 3

- [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요

  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

#### Assignment 4

- [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  - [x] 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

</details>

<details>

<summary>2. TODO LIST</summary>

### :: 2. [TODO LIST](https://github.com/SOPLAY/wanted-pre-onboarding-frontend/pull/2)

#### Assignment 5

- [x] `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [x] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- [x] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- [x] TODO는 `<li>` tag를 이용해 감싸주세요

#### Assignment 6

- [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요

  - [x] TODO 입력 input에는 `data-testid="new-todo-input"` 속성을 부여해주세요
  - [x] TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요

- [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

#### Assignment 7

- [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

#### Assignment 8

- [x] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

  - [x] 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요
  - [x] 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요

#### Assignment 9

- [x] 투두 리스트의 삭제 기능을 구현해주세요

  - [x] 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

#### Assignment 10

- [x] 투두 리스트의 수정 기능을 구현해주세요

  - [x] TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - [x] 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - [x] 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
    - [x] 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
  - [x] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
    - [x] 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
    - [x] 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
  - [x] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - [x] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

</details>

## 프로젝트 데모

### [Todos React site](https://wanted-pre-onboarding-frontend-soplay.netlify.app/)

## 폴더 구조

```javascript
├── public
└── src
    ├── apis
    ├── components
    │   ├── common
    │   │   ├── Button
    │   │   └── Input
    │   ├── layout
    │   │   └── header
    │   ├── signForm
    │   └── todo
    │       ├── todoCreate
    │       ├── todoItem
    │       └── todoList
    ├── constants
    │   └── auth
    ├── contexts
    │   └── todo
    ├── hooks
    │   ├── auth
    │   └── todo
    ├── pages
    │   ├── auth
    │   │   ├── signIn
    │   │   └── signUp
    │   └── todo
    ├── styles
    ├── types
    └── utils
        ├── hoc
        └── validate
```

## 프로젝트 실행 방법

1. 의존성 패키지 설치

```shell
yarn
```

2. 프로젝트 dev 실행

```shell
yarn start
```

3. [`localhost:3000`](http://localhost:3000) 접속
