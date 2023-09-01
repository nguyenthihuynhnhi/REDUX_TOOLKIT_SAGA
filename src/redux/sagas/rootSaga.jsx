import { all } from "redux-saga/effects";

import * as userSaga from "./userSaga";


// Tạo rootSaga kết hợp nhiều Saga Watcher lại với all()
function* rootSaga() {
  // nếu call thêm API trong midware, thì tạo lúc export đặt tên theo cú pháp "follow[TênTypeDispatch]",
  //và vào rootSaga "," để tạo thêm phần tử trong mảng này
  yield all([userSaga.followLoginSaga()]);
}

export default rootSaga;
