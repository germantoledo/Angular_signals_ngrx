import { createReducer, on } from "@ngrx/store";
import { updatePhoto } from "./photo.actions";

export interface State {
    image: string;
}
export const initialState: State = { image: '', };

export const photoReducer = createReducer(
    initialState,
    on(updatePhoto, (state, {image}) => ({
        ...state,
        image: image
    }))
);