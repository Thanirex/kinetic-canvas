/**
 * Converts a Google Drive share link into a direct download/view URL
 * that can be used as an image source.
 * 
 * Supports formats:
 * - https://drive.google.com/file/d/FILE_ID/view...
 * - https://drive.google.com/open?id=FILE_ID
 * 
 * @param url The Google Drive share URL
 * @returns A direct URL to the image, or the original URL if no ID is found
 */
export const getDriveDirectLink = (url: string): string => {
    if (!url) return "";

    // If it's already a direct link or not a drive link, return as is (to support Unsplash placeholders)
    if (!url.includes("drive.google.com")) {
        return url;
    }

    // extract ID from /file/d/ID/view
    const fileIdMatch = url.match(/\/file\/d\/([^/]+)/);

    // extract ID from ?id=ID
    const idParamMatch = url.match(/[?&]id=([^&]+)/);

    const fileId = fileIdMatch ? fileIdMatch[1] : (idParamMatch ? idParamMatch[1] : null);

    if (fileId) {
        // using 'lh3.googleusercontent.com' is more reliable for direct image embedding
        return `https://lh3.googleusercontent.com/d/${fileId}`;
    }

    return url;
};
