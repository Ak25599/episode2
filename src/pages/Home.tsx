import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username);

    return <h1> THIS IS THE Home PAGE {username}</h1>;
};