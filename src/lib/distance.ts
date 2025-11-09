// lib/distance.ts
// このファイルは、地図や距離に関する計算を行うための「道具箱（ユーティリティ）」のようなものです。
// 専門的な計算をここにまとめておくことで、他のファイルは難しい計算式を意識することなく、
// 「距離を教えて」と頼むだけで使えるようになります。

/**
 * @function getDistanceFromLatLonInKm
 * 2つの地点の緯度経度から、直線距離（キロメートル）を計算します。
 * 地球が丸いことを考慮した、少し複雑な計算式（ハーベサイン公式）を使っています。
 * @param {number} lat1 - 地点1の緯度
 * @param {number} lon1 - 地点1の経度
 * @param {number} lat2 - 地点2の緯度
 * @param {number} lon2 - 地点2の経度
 * @returns {number} 2地点間の距離 (km)
 */
export const getDistanceFromLatLonInKm = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // 地球の半径 (km)
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // 距離 (km)
};

/**
 * @function deg2rad
 * 角度の単位「度 (degree)」を「ラジアン (radian)」に変換します。
 * JavaScriptの三角関数の計算（sin, cosなど）はラジアンを基準にするため、この変換が必要です。
 * @param {number} deg - 角度（度）
 * @returns {number} 角度（ラジアン）
 */
const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
};

/**
 * @function formatDistance
 * キロメートル単位の距離を、人間が読みやすい形式（例: "500m" や "1.2km"）に変換します。
 * 1km未満の場合はメートルで、1km以上の場合は小数点第1位までのキロメートルで表示します。
 * @param {number} distanceKm - キロメートル単位の距離
 * @returns {string} フォーマットされた距離の文字列
 */
export const formatDistance = (distanceKm: number): string => {
    if (distanceKm < 1) {
        return `${Math.round(distanceKm * 1000)}m`;
    }
    return `${distanceKm.toFixed(1)}km`;
};

/**
 * @function parseDistance
 * フォーマットされた距離の文字列（例: "1.2km"）を、メートル単位の数値に変換します。
 * 文字列から数字部分だけを抜き出し、単位が'km'なら1000倍します。
 * これにより、「近い順」などで正しく並び替えができるようになります。
 * @param {string} distanceStr - 距離の文字列
 * @returns {number} メートル単位の距離
 */
export const parseDistance = (distanceStr: string): number => {
    const value = parseFloat(distanceStr.replace(/[^0-9.]/g, ''));
    if (distanceStr.includes('km')) {
        return value * 1000;
    }
    return value;
};
