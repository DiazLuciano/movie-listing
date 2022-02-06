const API = "https://api.themoviedb.org/3";

export async function get(path) {
    const result = await fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2Q4YTI0OTY2MDA2ZTZjMmY3N2UxNTI0ZjE2ZDUyNiIsInN1YiI6IjYxYzBmMmEyNGRhM2Q0MDA5NmM0MGNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qzf3sqx1sYDsI4MJLze1lRbRit7z7G5FwzdA-47qJew",
            "Content-Type": "application/json;charset=utf-8"
        }
    });
    return await result.json();
}
