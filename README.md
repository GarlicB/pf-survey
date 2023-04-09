# Portfolio Survey - 설문조사 웹서비스

'Portfolio Survey'는 관리자가 등록한 설문조사에 사용자가 참여할 수 있는 웹 서비스입니다. ReactJS로 구현됐으며 다음과 같은 부가 라이브러리를 사용합니다.

## 사용 라이브러리

이 프로젝트에서는 간결하고 논리적인 코드를 작성하기 위해 ReactJS와 함께 주요 부가 라이브러리를 사용합니다.

- tailwindCSS: 맞춤형 디자인 구축을 위한 CSS 프레임워크
- react-hook-form: 폼 유효성 검사와 자료 관리
- react-router-dom: React 애플리케이션 내에서 라우팅 처리
- react-select: 커스터마이징 가능한 셀렉트 컴포넌트
- recharts: React용 차트 라이브러리로, 다양한 차트 유형을 지원
- react-wordcloud: 사용자 입력값을 시각화

## 기능설명

### 관리자

설문조사 생성/등록/삭제

> 관리자는 웹 인터페이스를 통해 설문조사를 생성하고 등록할 수 있으며, 필요한 경우 삭제할 수도 있습니다. 또한 관리자는 생성된 설문조사 결과를 시각화하여 분석할 수 있습니다.

### 사용자

설문조사 조회/참여

> 사용자는 웹 인터페이스를 통해 생성된 설문조사를 조회하고 참여할 수 있습니다. 사용자는 설문조사 내에서 입력값을 제공하고 서버로 전송할 수 있습니다.

### 공통

로그인/회원가입

> 사용자는 계정을 생성하고 로그인하여 설문조사를 관리하고 참여할 수 있습니다.

rough-survey/
├── public/
│ ├── index.html
│ └── ...
└── src/
├── components/
│ ├── Admin/
│ │ ├── AdminDashboard.js
│ │ ├── AdminLogin.js
│ │ ├── CreateSurvey.js
│ │ ├── DeleteSurvey.js
│ │ ├── SurveyAnalytics.js
│ │ └── UpdateSurvey.js
│ ├── Shared/
│ │ ├── Footer.js
│ │ ├── Header.js
│ │ └── PrivateRoute.js
│ ├── User/
│ │ ├── Survey.js
│ │ ├── UserDashboard.js
│ │ └── UserLogin.js
│ ├── Form/
│ │ ├── SurveyForm.js
│ │ └── ...
│ ├── Chart/
│ │ ├── BarChart.js
│ │ ├── PieChart.js
│ │ ├── WordCloud.js
│ │ └── ...
│ └── ...
├── helpers/
│ ├── api.js
│ ├── auth.js
│ └── ...
├── pages/
│ ├── AdminDashboardPage.js
│ ├── AdminLoginPage.js
│ ├── CreateSurveyPage.js
│ ├── DeleteSurveyPage.js
│ ├── SurveyAnalyticsPage.js
│ ├── UpdateSurveyPage.js
│ ├── UserDashboardPage.js
│ ├── UserLoginPage.js
│ ├── SurveyPage.js
│ └── ...
├── App.js
├── index.js
├── routes.js
└── ...
위 디렉토리 구조에서는 src 폴더 내에 각각 components, helpers, pages 폴더를 가지며, components 폴더 내에는 프로젝트에 필요한 다양한 컴포넌트가 위치합니다.

Admin, User, Form, Chart와 같은 하위 폴더는 컴포넌트 유형에 따라 구분되며, 각각 관리자, 사용자, 폼, 차트 관련 컴포넌트가 포함됩니다.

pages 폴더는 애플리케이션의 라우팅 및 페이지 구성을 담당하며, AdminLoginPage, CreateSurveyPage, SurveyPage와 같은 파일이 위치합니다.

helpers 폴더는 API 호출 및 인증과 같은 유틸리티 함수가 포함됩니다.

또한, App.js와 index.js 파일은 React 애플리케이션의 진입점이 되며, routes.js 파일은 라우팅 구성 정보를 담고 있습니다.

이 구조를 참조하여 적절하게 파일을 배치하고, 각 컴포넌트 및 파일들이 적절하
