import kakao from "@image/kakao.png";

const LoginPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col items-center">
                {/* IP/PW 입력 */}
                <input
                    type="text"
                    placeholder="IP"
                    className="mb-3 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="password"
                    placeholder="PW"
                    className="mb-6 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* 소셜 아이콘 */}
                <div className="flex space-x-4 mb-6">
                    {/* 카카오 */}
                    <button className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center shadow">
                        <span className="text-black text-2xl font-bold">K</span>
                    </button>
                    {/* 네이버 */}
                    <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <rect width="24" height="24" rx="12" fill="#03C75A" />
                            <path d="M7 7h3.5l3.5 5V7H17v10h-3.5l-3.5-5v5H7V7z" fill="#fff" />
                        </svg>
                    </button>
                    {/* 구글 */}
                    <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow">
                        <svg width="24" height="24" viewBox="0 0 48 48">
                            <g>
                                <path fill="#4285F4" d="M24 9.5c3.54 0 6.49 1.22 8.63 3.23l6.42-6.42C34.16 2.7 29.45 0.5 24 0.5 14.84 0.5 6.93 6.54 3.64 14.16l7.48 5.81C12.82 14.77 17.97 9.5 24 9.5z" />
                                <path fill="#34A853" d="M46.14 24.5c0-1.64-.15-3.22-.43-4.74H24v9.02h12.39c-.53 2.87-2.14 5.3-4.55 6.92l7.02 5.46C43.93 36.46 46.14 30.88 46.14 24.5z" />
                                <path fill="#FBBC05" d="M11.12 28.97a14.47 14.47 0 0 1 0-9.94l-7.48-5.81A23.94 23.94 0 0 0 0 24.5c0 3.85.93 7.49 2.64 10.78l8.48-6.31z" />
                                <path fill="#EA4335" d="M24 47.5c6.45 0 11.86-2.14 15.82-5.82l-7.02-5.46c-2.01 1.35-4.59 2.16-8.8 2.16-6.03 0-11.18-5.27-12.88-12.47l-8.48 6.31C6.93 42.46 14.84 47.5 24 47.5z" />
                            </g>
                        </svg>
                    </button>

                </div>

                {/* 로그인/회원가입 버튼 */}
                <button className="w-full py-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold">
                    로그인
                </button>
                <button className="w-full py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-semibold">
                    회원가입
                </button>
            </div>
        </div>
    )
}

export default LoginPage;