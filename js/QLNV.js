function ThemNV()
{
    let MaNV = document.getElementById('MaNV').value
    let TenNV = document.getElementById('TenNV').value
    let DOB = document.getElementById('DOB').value
    let DiaChi = document.getElementById('DiaChi').value
    let Email = document.getElementById('Email').value
    let SDT = document.getElementById('SDT').value
    let GT= document.querySelector('input[name=GT]:checked')
    ? document.querySelector('input[name=GT]:checked').value: ''
    if (!MaNV)
{
    document.getElementById('errorManv').innerText='Vui lòng nhập Mã nhân viên'
}
else
{
    document.getElementById('errorManv').innerText =''
}
if (!TenNV)
{
    document.getElementById('errortennv').innerText='Vui lòng nhập Tên nhân viên'
}
else
{
    document.getElementById('errortennv').innerText =''
}
if (!GT)
{
    document.getElementById('errorgt').innerText='Vui lòng chọn giới tính'
}
else
{
    document.getElementById('errorgt').innerText =''
}
if (!DOB)
{
    document.getElementById('errordob').innerText='Vui lòng nhập Ngày sinh'
}
else
{
    document.getElementById('errordob').innerText =''
}
if (!DiaChi)
{
    document.getElementById('errordiachi').innerText='Vui lòng nhập Địa chỉ'
}
else
{
    document.getElementById('errordiachi').innerText =''
}
if (!SDT)
{
    document.getElementById('errorsdt').innerText='Vui lòng nhập Số điện thoại'
}
else
{
    document.getElementById('errorsdt').innerText =''
}
if (!Email)
{
    document.getElementById('erroremail').innerText='Vui lòng nhập Email'
}
else
{
    document.getElementById('erroremail').innerText =''
}
if(MaNV && TenNV && GT && DOB && DiaChi && Email && SDT )
    {
        let lisNV= localStorage.getItem('key')
        ? JSON.parse(localStorage.getItem('key')):[]
        lisNV.push({
            MaNV: MaNV,
            TenNV: TenNV,
            GT : GT,
            DOB: DOB,
            DiaChi: DiaChi,
            Email: Email,
            SDT: SDT
        })
        localStorage.setItem('key', JSON.stringify(lisNV))
    }
    HienThi()
    resetform()
}
function HienThi()
{
    let lisNV= localStorage.getItem('key')
    ? JSON.parse(localStorage.getItem('key')):[] 
    let NV = ` <tr>
    <td>STT</td>
    <td>Mã NV</td>           
    <td>Tên NV</td>
    <td>Giới Tính</td>
    <td>Ngày sinh</td>
    <td>Địa chỉ</td>
    <td>Email</td>
    <td>Số điện thoại</td>
    <td>Action</td>
</tr>`
      lisNV.forEach((value, index, number) => {
        NV +=`
        <tr>
        <td>${index}</td>
        <td>${value.MaNV}</td>       
        <td>${value.TenNV}</td>
        <td>${value.GT}</td>
        <td>${value.DOB}</td>
        <td>${value.DiaChi}</td>
        <td>${value.Email}</td>
        <td>${value.SDT}</td>
        <td><button onclick="SuaNV(${index})">Sửa</button><button onclick="XoaNV(${index})" >Xóa</button></td>
    </tr>`
      });
     document.getElementById('Noidung').innerHTML= NV
}
function resetform()
{
    document.getElementById('MaNV').value=''
    document.getElementById('TenNV').value=''
    document.getElementById('DOB').value=''
    document.getElementById('DiaChi').value=''
    document.getElementById('Email').value=''
    document.getElementById('SDT').value=''
    if (document.getElementById('nam').checked)
    {
        (document.getElementById('nam').checked)=false
    }
    if (document.getElementById('nu').checked)
    {
        (document.getElementById('nu').checked)=false
    }
}
function SuaNV(index)
{
    let lisNV= localStorage.getItem('key')
    ? JSON.parse(localStorage.getItem('key')):[] 
    document.getElementById('MaNV').value= lisNV[index].MaNV
    document.getElementById('TenNV').value= lisNV[index].TenNV
    document.getElementById('DOB').value= lisNV[index].DOB
    document.getElementById('DiaChi').value= lisNV[index].DiaChi
    document.getElementById('Email').value= lisNV[index].Email
    document.getElementById('SDT').value= lisNV[index].SDT
    if (document.getElementById('nam').value=== lisNV[index].GT)
    {
        document.getElementById('nam').checked = true
    }
    if (document.getElementById('nu').value=== lisNV[index].GT)
    {
        document.getElementById('nu').checked = true
    }
    document.getElementById('index').value = index
    document.getElementById('save').style.display='none'
    document.getElementById('update').style.display='inline-block'
}
function SuaNV2()
{
    let lisNV= localStorage.getItem('key')
    ? JSON.parse(localStorage.getItem('key')):[] 
    let KeyNumber= document.getElementById('index').value
    lisNV[KeyNumber]=
    {
     MaNV: document.getElementById('MaNV').value,
     TenNV: document.getElementById('TenNV').value,
     DOB: document.getElementById('DOB').value,
     DiaChi: document.getElementById('DiaChi').value,
     Email: document.getElementById('Email').value,
     SDT: document.getElementById('SDT').value,
     GT: document.querySelector('input[name=GT]:checked').value
    }
    localStorage.setItem('key', JSON.stringify(lisNV))
    document.getElementById('save').style.display='inline-block'
    document.getElementById('update').style.display='none'
    resetform()
    HienThi()
}
function XoaNV(key)
{
    let lisNV= localStorage.getItem('key')
    ? JSON.parse(localStorage.getItem('key')):[] 
    if (confirm('Bạn muốn xóa không'))
    {
        lisNV.splice('key', 1)
    }  
    localStorage.setItem('key', JSON.stringify(lisNV))
    HienThi()
}