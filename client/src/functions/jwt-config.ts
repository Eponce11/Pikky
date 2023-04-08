


const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export const getOptions = (): any => {
    const options = {
        method: 'post',
        credentials: 'same-origin',
        headers: {
            'X-CSRF-TOKEN': getCookie('csrf_access_token')
        }
    }
    return options
}