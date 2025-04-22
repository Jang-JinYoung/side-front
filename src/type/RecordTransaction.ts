import { z } from "zod";

export const TransactionCode = {
    INCOME: "10000001",
    EXPENSE: "10000002"
}

/**
 * 기본
 */
export const RecordTransactionSchema = z.object({
    // 번호
    transactionId: z.number().optional(), 
    // 일자
    transactionDate: z.string().date(),
    // 지출/입금
    transactionCode: z.string().max(8),
    // 금액
    amount: z.number(),
    // 카테고리
    categoryCode: z.string().max(8),
    // 내용
    description: z.string().optional(),
});

export type TRecordTransaction = z.infer<typeof RecordTransactionSchema>;


/**
 * 등록/수정
 */
const RecordTransactionRegistSchema = RecordTransactionSchema.extend({
    amount: z.number().optional(),
});

export type TRecordTransactionRegist = z.infer<typeof RecordTransactionRegistSchema>;

/**
 * 상세
 */
const RecordTransactionDetailSchema = RecordTransactionSchema.extend({
    transactionId: z.number(),
    categoryCodeName: z.string()
});


export type TRecordTransactionDetail = z.infer<typeof RecordTransactionDetailSchema>;