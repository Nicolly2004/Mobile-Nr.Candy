import { Slot } from "expo-router";
import { Providers } from "./Providers";

export default function RootLayout() {
    return (
        <Providers>
        <Slot/>
        </Providers>
    )
}