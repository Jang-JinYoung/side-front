import { snsLogin } from "@service/api/loginApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CallbackPage = () => {

    const code = new URLSearchParams(window.location.search).get("code");
    const { sns } = useParams();

    const navigate = useNavigate();


    if(!sns || !code) {
        console.log("a");
        
        useEffect(() => {
            window.alert("잘못된 페이지입니다.");
            navigate("/login")
        }, [])

        return <div></div>
    }

    const { data, isLoading } = useQuery({
        queryKey: ['login', code, sns],
        queryFn: () => snsLogin(sns, code),
    });


    useEffect(() => {
        if(data) {
            // @todo
            // 어세스토큰 session

            // navigate("/transaction");
        }
    }, [data]);


    // useEffect(() => {
    //     const getData = async () => {
    //         const callback = await service("GET", `/${sns}/callback?code=${code}`);
    //     };
    //     getData();
    // }, []);

    return (
        <div>callback</div>
    )
};

export default CallbackPage;