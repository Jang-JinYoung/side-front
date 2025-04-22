import { z } from "zod";

/**
 * 기본
 */
export const CommonCodeSchema = z.object({
    // 코드번호
    code: z.string().max(8), 
    // 부모코드번호
    parentCode: z.string().max(8).or(z.null()),
    // 코드 고유명
    codeKorName: z.string(),
    // 코드 공통명
    codeName: z.string(),
    // 내용
    description: z.string().max(8),
});

export type TCommonCode = z.infer<typeof CommonCodeSchema>;