//get browser url: document.location.href

url = 'https://www.amazon.com/' //sample. later loop through list of urls we want. 
let response = axios.get(url) 
let info_list = ['username', 'password', 'email address', 'phone number']

let root_domain = request[-2].split(".")[0];
///how do i populate the values

//filter for response keys that contain items from info_list
let site_info = root_domain.filter(item => item in info_list);
//filter for items that have "TRUE" as their value
let root_domain_true = site_info.filter(item => response[item] = "TRUE");
