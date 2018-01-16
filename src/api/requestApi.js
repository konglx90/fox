import fetchRequest from './fetch';
import config from './config';

const BASE_URL = `${config.baseUrl}${config.apiPrefix}`;

const baseFetch = (url, opts = {}) => {
    return fetchRequest(url, {
        baseURL: BASE_URL,
        ...opts,
    }).then(res => {
        return res;
    }).catch(error => {
        throw error;
    });
}

// **** business code ****

/**
* iOS软件版本查询
*
* @param {String} installedVersion 当前安装版本
*/
export const getIOSVersion = (installedVersion = '2.3.0') => {
    return baseFetch(`/version/ios/${installedVersion}`)
        .then(res => res.latest);
}

/**
* Android软件版本查询
*
* @param {String} installedVersion 当前安装版本
*/
export const getAndroidVersion = (installedVersion = '2.3.0') => {
    return baseFetch(`/version/android/${installedVersion}`)
        .then(res => res.latest);
}

/**
* 获取最新的新闻日报
*
*/
export const getLastestNews = () => {
    return baseFetch(`/news/latest`);
}
