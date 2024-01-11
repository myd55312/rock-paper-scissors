function select(luaChonNguoiChoi) {
    let luaChonMayTinh = chonNgauNhien();
    let ketQua = tinhKetQua(luaChonNguoiChoi, luaChonMayTinh);

    let thongBao = "Bạn chọn " + luaChonNguoiChoi + ", máy tính chọn " + luaChonMayTinh + ". ";
    if (ketQua === 'thang') {
        thongBao += "Bạn thắng!";
    } else if (ketQua === 'thua') {
        thongBao += "Bạn thua.";
    } else {
        thongBao += "Hòa.";
    }
    document.getElementById("ketQua").innerText = thongBao;
}
function chonNgauNhien() {
    let luaChonMayTinh = Math.floor(Math.random() * 3);
    if (luaChonMayTinh === 0) {
        return 'búa';
    } else if (luaChonMayTinh === 1) {
        return 'kéo';
    } else {
        return 'bao';
    }
}

function tinhKetQua(luaChonNguoiChoi, luaChonMayTinh) {
    if (
        (luaChonNguoiChoi === 'bua' && luaChonMayTinh === 'keo') ||
        (luaChonNguoiChoi === 'keo' && luaChonMayTinh === 'bao') ||
        (luaChonNguoiChoi === 'bao' && luaChonMayTinh === 'bua')
    ) {
        return 'thang';
    } else if (
        (luaChonNguoiChoi === 'bua' && luaChonMayTinh === 'bao') ||
        (luaChonNguoiChoi === 'keo' && luaChonMayTinh === 'bua') ||
        (luaChonNguoiChoi === 'bao' && luaChonMayTinh === 'keo')
    ) {
        return 'thua';
    } else {
        return 'hoà';
    }
}