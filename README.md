# Event Deligation

1. 이벤트 위임 (Event Delegation)
#### 개념
- 이벤트 위임은 자식 요소마다 개별적으로 이벤트 리스너를 등록하지 않고, 부모 요소에 이벤트 리스너를 등록하여 자식 요소에서 발생한 이벤트를 처리하는 기법입니다.
- 이벤트 버블링을 활용해 구현되며, 동적으로 추가된 자식 요소도 이벤트를 처리할 수 있습니다.

#### 특징
- 효율적: 자식 요소마다 이벤트를 붙이는 대신, 부모 요소에만 이벤트 리스너를 등록.
- 유연성: 동적으로 추가된 자식 요소도 처리 가능.

```js
import React from "react";

function EventDelegationExample() {
  const handleClick = (event) => {
    console.log(`Clicked element: ${event.target.tagName}`);
    if (event.target.tagName === "BUTTON") {
      console.log(`Button clicked: ${event.target.textContent}`);
    }
  };

  return (
    <div onClick={handleClick}>
      <button>Button 1</button>
      <button>Button 2</button>
      <p>Paragraph</p>
    </div>
  );
}

export default EventDelegationExample;
```

### 설명
`<div>`에 이벤트 리스너를 등록하고, 클릭된 요소(event.target)를 확인.
버튼 클릭 시 부모가 이를 처리하고 버튼 정보를 출력.
동적으로 추가된 `<button>`도 자동으로 처리 가능.

2. 이벤트 버블링 (Event Bubbling)
#### 개념
- 이벤트 버블링은 이벤트가 가장 안쪽의 요소(이벤트 발생 요소)에서 시작해 상위 요소로 전파되는 과정입니다.
- React에서는 기본적으로 이벤트가 버블링 단계에서 처리됩니다.

#### 특징
- 기본적으로 DOM 이벤트는 버블링이 활성화되어 있음.
- event.stopPropagation()으로 버블링을 중단할 수 있음.

```js
import React from "react";

function EventBubblingExample() {
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log("Child clicked");
    // event.stopPropagation(); // 주석 해제하면 버블링 중단
  };

  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>Click Me</button>
    </div>
  );
}

export default EventBubblingExample;
```

#### 설명
- 버튼 클릭 시:
    - handleChildClick이 실행되고,
    - 버블링 단계에서 handleParentClick이 실행.
- event.stopPropagation()을 사용하면 부모의 이벤트는 실행되지 않음.

3. 이벤트 캡처링 (Event Capturing)
#### 개념
- 이벤트 캡처링은 이벤트가 상위 요소에서 시작해 가장 안쪽의 요소로 전달되는 과정입니다.
- React에서 onClickCapture 같은 캡처링 전용 핸들러를 사용해 처리.

#### 특징
- 기본적으로 DOM 이벤트는 캡처링을 지원하지만, React는 캡처링 대신 버블링을 기본으로 사용.
- addEventListener의 세 번째 인자로 true를 전달하거나 React의 onClickCapture를 사용해 캡처링 단계에서 이벤트 처리 가능.

```js
import React from "react";

function EventCapturingExample() {
  const handleParentCapture = () => {
    console.log("Parent capturing");
  };

  const handleChildCapture = () => {
    console.log("Child capturing");
  };

  const handleParentBubble = () => {
    console.log("Parent bubbling");
  };

  const handleChildBubble = () => {
    console.log("Child bubbling");
  };

  return (
    <div onClickCapture={handleParentCapture} onClick={handleParentBubble}>
      <button
        onClickCapture={handleChildCapture}
        onClick={handleChildBubble}
      >
        Click Me
      </button>
    </div>
  );
}

export default EventCapturingExample;
```

#### 설명
- 클릭 순서:
    - 캡처링 단계: Parent capturing → Child capturing
    - 버블링 단계: Child bubbling → Parent bubbling
- React의 onClickCapture는 캡처링 단계에서 이벤트를 처리.