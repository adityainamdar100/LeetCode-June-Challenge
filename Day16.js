/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    if(IP.includes(".")) {
        let a = IP.split(".");
        if(a.length!==4)
            return "Neither";
        for(let i of a) {
            if((i.length>3 || i.length===0) || (i.length>1 && i[0]==='0') || isNaN(parseInt(i)) ||(parseInt(i).toString().length<i.length) 
               || parseInt(i)>255)
                return "Neither";
        }
        return "IPv4";
    } else if(IP.includes(":")) {
        let a = IP.split(":");
        if(a.length!==8) 
            return "Neither";
        for(let i of a) {
            if(i.length===0 || i.length>4)
                return "Neither";
            for(let j=0;j<i.length;j++) {
                if((i.charCodeAt(j)<48 || i.charCodeAt(j)>57) && 
                  (i.charCodeAt(j)<65 || i.charCodeAt(j)>70) && 
                  (i.charCodeAt(j)<97 || i.charCodeAt(j)>102)) 
                    return "Neither";
            }
        }
        return "IPv6";
    } else {
        return "Neither";
    }
};
