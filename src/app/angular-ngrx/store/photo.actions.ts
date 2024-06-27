import { createAction, props } from "@ngrx/store";


export const initialState = '';
export const updatePhoto = createAction(initialState,
    props<{image: string}>()
)
