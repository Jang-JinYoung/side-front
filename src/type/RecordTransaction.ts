import { z } from "zod";

const TypeSchema = z.enum(["Expense", "Income"]);

export const RecordTransactionSchema = z.object({
    // 번호
    id: z.number().optional(), 
    // 일자
    date: z.string().date(),
    // 지출/입금
    type: TypeSchema,
    // 금액
    amount: z.number(),
    // 카테고리
    category: z.string(),
    // 내용
    description: z.string().optional(),
});


export type TRecordTransaction = z.infer<typeof RecordTransactionSchema>;