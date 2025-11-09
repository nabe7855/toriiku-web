// services/geminiService.ts
// このファイルは、外部のサービス、特にGoogleのAIである「Gemini」との通信を担当します。
// アプリの機能の中でも、専門的な処理を外部のAIにお願いする部分をここにまとめています。
// これにより、AIとのやり取りに関する複雑なコードを他のファイルから分離し、整理しています。

import { GoogleGenAI } from "@google/genai";

// APIキーを環境変数から安全に読み込みます。
// APIキーは、Geminiサービスを利用するための「秘密の鍵」のようなものです。
const API_KEY = process.env.API_KEY;

// APIキーが設定されていない場合、コンソールに警告メッセージを表示します。
if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini features will be disabled.");
}

// AIとの通信を行うためのインスタンス（AIを操作するための分身のようなもの）を作成します。
// APIキーがなければ、AI機能は使えないのでnull（空っぽ）にしておきます。
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

/**
 * @function generateSummary
 * 長いサービス説明文をGeminiに送り、親しみやすい言葉で3つの箇条書きに要約してもらいます。
 * @param {string} description - 要約してほしい元の文章。
 * @returns {Promise<string>} - AIによって生成された要約文。
 */
export const generateSummary = async (description: string): Promise<string> => {
  // もしAIの準備ができていなければ（APIキーがなければ）、
  // あらかじめ用意しておいたダミーの要約文を返します。
  if (!ai) {
    return Promise.resolve("Gemini API key is not configured. This is a demo summary:\n\n* **お近くの食品ロスをお得にゲット**：近所のパン屋さんや飲食店で余っている美味しい食べ物を、お得な価格でレスキューできます。\n* **簡単な検索と予約**：現在地から近いお店をすぐに探せ、アプリ内で簡単に予約・決済が完了します。\n* **リアルタイム通知**：お気に入りのお店の新着情報を見逃さないよう、リアルタイムでお知らせが届きます。");
  }

  try {
    // Geminiのモデル（今回はgemini-2.5-flash）に、要約のお願い（プロンプト）を送信します。
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `以下の文章を元に、フードロス削減アプリ「トリーク」がどのようなサービスなのか、新しいユーザー向けに親しみやすい言葉で、簡潔に3つの箇条書きで説明してください。\n\n---\n\n${description}`
    });
    // AIからの返答（response）の中から、テキスト部分だけを取り出して返します。
    return response.text ?? "";

  } catch (error) {
    // AIとの通信中にエラーが発生した場合は、その内容をコンソールに表示し、
    // ユーザーにはエラーメッセージを伝えます。
    console.error("Error generating summary with Gemini:", error);
    throw new Error("Failed to generate summary. Please try again.");
  }
};
