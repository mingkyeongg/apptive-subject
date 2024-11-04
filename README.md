# 구현 페이지
<img width="299" alt="스크린샷 2024-11-04 오후 5 47 41" src="https://github.com/user-attachments/assets/ed063d66-c5fd-4bb5-9e5a-f1b7f0ca577a">
<img width="311" alt="스크린샷 2024-11-04 오후 5 48 03" src="https://github.com/user-attachments/assets/6133cd11-2091-4617-a1a6-bbba5d9959f1">


# Q. 배열을 렌더링할 때, 각 컴포넌트에 key값을 만들어 전달해줘야 합니다. key는 왜 필요한 걸까요? key값을 정하는 기준은 무엇인가요?

```js
arr.map(callback(currentValue[, index[, array]])[, thisArg])
// callback : 새로운 배열 요소를 생성하는 함수
// currentValue: 처리할 현재 요소
// index : 처리할 현재 요소의 인덱스
// array : map()을 호출한 배열
```

- map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

- 리액트에서는 위와 같이 numbers 배열을 받아서 순서없는 list를 출력하는 컴포넌트를 만들 수 있다.

- key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
- key는 element에 안정적인 고유성을 부여하기 위해 배열 내부의 element에 지정해야 한다.


### 사용 이유
- DOM 노드의 자식들을 재귀적으로 처리할 때, React는 기본적으로 두 리스트를 순회하고 차이점이 있으면 변경을 생성한다.
- 자식의 끝에 element를 추가하면 이전 element가 일치하는 것을 확인하고 element를 트리에 추가한다.
- 이는 맨 앞에 element를 추가할 경우 그 이후 element까지 전부 변경하기 때문에 비효율적이다.

이러한 문제를 해결하기 위해 React에서는 key 속성을 사용하여 기존 트리와 이후 트리의 자식들이 일치하는지 확인한다.

### 어떤 key값을 사용할까

 - index를 사용해도 되나 배열이 재배열 될 경우 컴포넌트의 state와 관련된 문제가 발생할 수 있다. 항목의 순서가 바뀌었을 때 key 또한 바뀌기 때문에 컴포넌트의 state가 의도하지 않은 방식으로 바뀔 수 있다.

- 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것이다.





# Q. 조건부 렌더링이란 무엇일까요? 어떨 때 사용할 수 있을까요?

- 페이지를 구성하는 요소들은 종종 조건에 따라 다른 것을 렌더링 해야 한다. React에서는 JavaScript 구문을 사용하여 JSX를 조건부로 렌더링 할 수 있다.
- 예를 들어 Todo list를 구현해야할 때 완료된 일 / 완료되지 않은 일의 렌더링이 다르다. 하나의 일이 완료될 때 마다 새롭게 컴포넌트를 만드는 것은 비효율적이다. 다음과 같이 if-else 구문으로 간단하게 나타낼 수 있다.

```jsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}
```



# 참고
https://ko.legacy.reactjs.org/docs/lists-and-keys.html#gatsby-focus-wrapper
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://ko.legacy.reactjs.org/docs/reconciliation.html#recursing-on-children
https://react.dev/learn/conditional-rendering


