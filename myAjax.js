/**
 * Created by 李洋 on 2017/1/11.
 */
export default function myAjax(method, url, callback, data) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4)
            callback(xhr.responseText)
    }
    xhr.open(method, url);
    if (method === "post" || method === "POST")
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.send(data)
}