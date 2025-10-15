"use client";

import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { store } from "@/lib/store";

const Providers = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
};

export default Providers;
