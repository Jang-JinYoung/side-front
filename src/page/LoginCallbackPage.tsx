import { snsLogin } from "@service/api/loginApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CallbackPage = () => {

    const code = new URLSearchParams(window.location.search).get("code");
    const { sns } = useParams();

    const navigate = useNavigate();

    const onError = () => {
        window.alert("잘못된 페이지입니다.");
        navigate("/login");
    }


    if(!sns || !code) {
        
        useEffect(() => {
            onError();
        }, [])

        return <div></div>
    }

    const { data, isLoading } = useQuery({
        queryKey: ['login', code, sns],
        queryFn: () => snsLogin(sns, code),
    });


    useEffect(() => {
        if(data) {
            if(data.code === 200) {
                const accessToken = data.data.accessToken;
                console.log(accessToken);
                localStorage.setItem("accessToken", accessToken);

                navigate("/transaction");
            } else {
                onError();
            }
        }
    }, [data]);


    return (
        <div></div>
    )
};

export default CallbackPage;