function ThemSP()
{
    let MaSP = document.getElementById('MaSP').value
    let MaLSP = document.getElementById('MaLSP').value
    let TenSP = document.getElementById('TenSP').value
    let GiaSP = document.getElementById('GiaSP').value
    let SL = document.getElementById('SL').value
    console.log(MaSP, MaLSP, TenSP, GiaSP, SL)
    if (!MaSP)
    {
        document.getElementById('errorMasp').innerText='Vui lòng nhập Mã sản phẩm'
    }
    else
    {
        document.getElementById('errorMasp').innerText =''
    }
    if (!MaLSP)
    {
        document.getElementById('errorMalsp').innerText='Vui lòng nhập Mã loại sản phẩm'
    }
    else
    {
        document.getElementById('errorMalsp').innerText =''
    }
    if (!TenSP)
    {
        document.getElementById('errorTensp').innerText='Vui lòng nhập Tên sản phẩm'
    }
    else
    {
        document.getElementById('errorTensp').innerText =''
    }
    if (!GiaSP)
    {
        document.getElementById('errorGiasp').innerText='Vui lòng nhập Giá bán sản phẩm'
    }
    else
    {
        document.getElementById('errorGiasp').innerText =''
    }
    if (!SL)
    {
        document.getElementById('errorsl').innerText='Vui lòng nhập Số lượng sản phẩm'
    }
    else
    {
        document.getElementById('errorsl').innerText =''
    }
    if(MaSP && MaLSP && TenSP && GiaSP && SL)
    {
        let lisSP= localStorage.getItem('key')
        ? JSON.parse(localStorage.getItem('key')):[]
        lisSP.push({
            MaSP: MaSP,
            MaLSP: MaLSP,
            TenSP: TenSP,
            GiaSP: GiaSP,
            SL: SL,       
        })
        localStorage.setItem('key', JSON.stringify(lisSP))
    }
    HienThi()
    resetform()
}
function HienThi()
{
    let lisSP= localStorage.getItem('key')
    ? JSON.parse(localStorage.getItem('key')):[] 
    let SP = ` <tr>
    <td>STT</td>
    <td>Mã SP</td>
    <td>Mã Loại SP</td>
    <td>Tên SP</td>
    <td>Giá bán SP</td>
    <td>Số lượng</td>
    <td>Chức năng</td>
</tr>`
      lisSP.forEach((value, index, number) => {
        SP +=`
        <tr>
        <td>${index}</td>
        <td>${value.MaSP}</td>
        <td>${value.MaLSP}</td>
        <td>${value.TenSP}</td>
        <td>${value.GiaSP}</td>
        <td>${value.SL}</td>
        <td><button onclick="SuaSP(${index})">Sửa</button>
        <button onclick="XoaSP(${index})" >Xóa</button></td>
    </tr>`
      });
     document.getElementById('Noidung').innerHTML= SP
}
function resetform()
{
    document.getElementById('MaSP').value=''
    document.getElementById('MaLSP').value=''
    document.getElementById('TenSP').value=''
    document.getElementById('GiaSP').value=''
    document.getElementById('SL').value=''
}
function SuaSP(index)
{
    let lisLoaiSP= localStorage.getItem('key')
    ? JSON.parse(localStorage.getItem('key')):[] 
    document.getElementById('MaSP').value= lisLoaiSP[index].MaSP
    document.getElementById('MaLSP').value= lisLoaiSP[index].MaLSP
    document.getElementById('TenSP').value= lisLoaiSP[index].TenSP
    document.getElementById('GiaSP').value= lisLoaiSP[index].GiaSP
    document.getElementById('SL').value= lisLoaiSP[index].SL
    document.getElementById('index').value = index
    document.getElementById('save').style.display='none'
    document.getElementById('update').style.display='inline-block'
}
function SuaSP2()
{
    let lisSP= localStorage.getItem('key')
    ? JSON.parse(localStorage.getItem('key')):[] 
    let KeyNumber= document.getElementById('index').value
    lisSP[KeyNumber]=
    {
        MaSP: document.getElementById('MaSP').value,
        MaLSP: document.getElementById('MaLSP').value,
        TenSP: document.getElementById('TenSP').value,
        GiaSP: document.getElementById('GiaSP').value,
        SL: document.getElementById('SL').value,
    }
    localStorage.setItem('key', JSON.stringify(lisSP))
    document.getElementById('save').style.display='inline-block'
    document.getElementById('update').style.display='none'
    resetform()
    HienThi()
}
function XoaSP(key)
{
    let lisSP= localStorage.getItem('key')
    ? JSON.parse(localStorage.getItem('key')):[] 
    if (confirm('Bạn muốn xóa không'))
    {
        lisSP.splice('key', 1)
    }  
    localStorage.setItem('key', JSON.stringify(lisSP))
    HienThi()
}