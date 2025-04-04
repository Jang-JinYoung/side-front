import { ChangeEvent, useState } from "react";

const Modal = ({
    onClose
}: { onClose: any}) => {


    const [data, setData] = useState({
        date: new Date().toISOString().split('T')[0],
        type: '지출',
        category: '식비',
        amount: '',
        description: ''
    });
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        type: '지출',
        category: '식비',
        amount: '',
        description: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 새 항목 생성
        const newItem = {
            id: Date.now(), // 임시 ID
            date: formData.date,
            type: formData.type === '지출' ? '신용카드' : '입금',
            category: formData.category,
            amount: formData.type === '지출' ? -Math.abs(Number(formData.amount)) : Math.abs(Number(formData.amount)),
            description: formData.description
        };

        // 데이터 업데이트
        // setData([...data, newItem]);

        // 모달 닫기 및 폼 초기화
        onClose();
        setFormData({
            date: new Date().toISOString().split('T')[0],
            type: '지출',
            category: '식비',
            amount: '',
            description: ''
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">새 항목 추가</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            날짜
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            유형
                        </label>
                        <div className="flex space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="type"
                                    value="지출"
                                    checked={formData.type === '지출'}
                                    onChange={handleInputChange}
                                    className="form-radio"
                                />
                                <span className="ml-2">지출</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="type"
                                    value="입금"
                                    checked={formData.type === '입금'}
                                    onChange={handleInputChange}
                                    className="form-radio"
                                />
                                <span className="ml-2">입금</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            분류
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            {formData.type === '지출' ? (
                                <>
                                    <option value="식비">식비</option>
                                    <option value="교통비">교통비</option>
                                    <option value="쇼핑">쇼핑</option>
                                    <option value="생활비">생활비</option>
                                    <option value="여가">여가</option>
                                    <option value="기타">기타</option>
                                </>
                            ) : (
                                <>
                                    <option value="급여">급여</option>
                                    <option value="용돈">용돈</option>
                                    <option value="환불">환불</option>
                                    <option value="기타">기타</option>
                                </>
                            )}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                            금액
                        </label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="금액을 입력하세요"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            내용
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="내용을 입력하세요"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            취소
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            추가
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;