import defaultImage from "../assets/img/defaultImage.jpg";
import DOMPurify from "dompurify";

export const prepareImageUrl = (url?: string) => url || defaultImage;

export const prepareSummary = (value?: string) => ({
    __html: DOMPurify.sanitize(value)
})