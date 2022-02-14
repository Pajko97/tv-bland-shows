export default function stripString (string: string) {
    return string.replace(/(<([^>]+)>)/gi, "");
}
