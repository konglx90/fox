import qs from 'qs';
import config from './config';

function fetchRequest(url, opts={}) {
    let timeout = 5000;
    let _fetchOpts = {
        credentials: 'include',
        method: 'GET',
        headers: {
            Host: config.host,
        }
    };
    if (opts.qs) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + qs.stringify(opts.qs, { indices: !!!opts.qsStringfyOptions });
    }
    if (opts.json) {
        _fetchOpts.headers['Content-Type'] = 'application/json';
        _fetchOpts.body = JSON.stringify(opts.json);
    }
    if (opts.form) {
        _fetchOpts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        _fetchOpts.body = qs.stringify(opts.form, {indices: !!!opts.qsStringfyOptions});
    }
    if (opts.method) {
        _fetchOpts.method = opts.method
    }
    if (opts.formData) {
        _fetchOpts.headers['Content-Type'] = 'multipart/form-data';
        var form = new FormData();
        for (var key of opts.formData) {
            form.append(key, opts.formData[key]);
        }
        _fetchOpts.body = form;
    }
    if (opts.timeout !== undefined) {
        timeout = opts.timeout;
    }
    if (opts.credentials) {
        _fetchOpts.credentials = opts.credentials;
    }
    /* top level priority varibale set in the end */
    if (opts.headers) {
        Object.assign(_fetchOpts.headers, opts.headers);
    }
    if (opts.body) {
        _fetchOpts.body = opts.body;
    }
    const baseURL = opts.baseURL || '';
    return timeoutFetch(fetch(baseURL + url, _fetchOpts), timeout)
                .then(checkStatus)
                .catch(handleError);
}

/**
 * 检查接口响应状态码
 *
 * @param {Object} response axios返回的响应对象
 * @return {Object} 状态码正常时返回响应本身，否则返回 reject 信息
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    } else {
        const result = getErrorMsgByStatusCode(response.status);
        var error = new Error(result);
        error.response = response;
        throw error;
    }
}

/**
 * 异常处理函数，包含错误提示
 *
 * @param {Object} e 错误信息
 */
function handleError (e) {
    var error = new Error('网络加载失败，请检查网络设置'); // timeout
    throw error;
}

/**
 * 返回状态码对应文本提示信息
 *
 * @param {number} code 响应状态码
 * @return {string} 文本提示
 */
function getErrorMsgByStatusCode (code) {
    let result = '未知错误';
    if (code >= 400 && code < 500) {
        switch (code) {
            case 401:
                result = '您尚未登录,请登录后访问.';
                break;
            case 403:
                result = '您所请求的资源被禁止访问.';
                break;
            case 404:
                result = '您所请求的资源并不存在.';
                break;
            case 405:
                result = '非法请求被禁止.';
                break;
            default:
                result = `抱歉，程序出了问题(${code}).`;
        }
    } else if (code >= 500 && code < 600) {
        result = '服务器出错啦.';
    }
    return result;
}

function timeoutFetch(fetchPromise, timeout) {
    let abortFn = null;
    const abortPromise = new Promise(function(resolve, reject) {
        abortFn = function() {
            reject('timeout');
        };
    });
    const abortablePromise = Promise.race([
        fetchPromise,
        abortPromise
    ]);

    setTimeout(function() {
        abortFn();
    }, timeout);

    return abortablePromise;
}


export default fetchRequest;
