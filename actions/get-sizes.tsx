import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL);
    const data = await res.json();
    console.log("DEBUG SIZES >>>", data); // 👈 проверка
    return data;
}


export default getSizes;