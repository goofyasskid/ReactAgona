import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import { MainStore } from "../stores/mainStore";

export function useStore(): MainStore {
    return <MainStore>useContext(MobXProviderContext);
}