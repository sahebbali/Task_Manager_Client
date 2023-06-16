import { configureStore } from "@reduxjs/toolkit";
import settingRdeucer from '../state-slice/SettingSlice'
import taskReducer from '../state-slice/task-slice'
import summarReducer from '../state-slice/SummarySlice'
export default configureStore({
  reducer: {
    settings: settingRdeucer,
    task: taskReducer,
    summary:summarReducer,
  }
})