export class StorageUtil{
    public static storageSave<T>(key: string, value:T): void {
        sessionStorage.setItem(key, JSON.stringify(value))
    }
    public static StorageRead<T>(key: string): T | undefined{
        const storedValue = sessionStorage.getItem(key)
        try {
            if (storedValue) return JSON.parse(storedValue) as T;
            return undefined
        } catch (error) {
            sessionStorage.removeItem(key)
            return undefined
        }
    }
}
    // export const storageDelete<T> = key => {
    //     sessionStorage.removeItem(key)
    // }