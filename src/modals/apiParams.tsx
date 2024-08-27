export interface ApiParams<T = object> {
    url: string;
    method: 'GET' | 'POST'; // İstek türü
    params?: any; // Sorgu parametreleri (GET için)
    postData?: T; // Gönderilecek veri (POST için)
}