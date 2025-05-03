document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan elemen-elemen yang dibutuhkan
    const form = document.getElementById('profitForm');
    const hasilPenjualanInput = document.getElementById('hasilPenjualan');
    const biayaBenihInput = document.getElementById('biayaBenih');
    const biayaPakanPupukInput = document.getElementById('biayaPakanPupuk');
    const biayaObatInput = document.getElementById('biayaObat');
    const biayaTenagaKerjaInput = document.getElementById('biayaTenagaKerja');
    const biayaLainInput = document.getElementById('biayaLain');
    const hitungButton = document.getElementById('hitungButton');
    const hasilKalkulasiDiv = document.getElementById('hasilKalkulasi');
    const totalBiayaOutput = document.getElementById('totalBiayaOutput');
    const keuntunganKasarOutput = document.getElementById('keuntunganKasarOutput');

    // Fungsi untuk format angka ke Rupiah
    function formatRupiah(angka) {
        // Handle jika angka bukan number atau NaN
        if (isNaN(angka) || typeof angka !== 'number') {
            angka = 0;
        }
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0, // Tidak menampilkan desimal
            maximumFractionDigits: 0
        }).format(angka);
    }

    // Fungsi untuk melakukan kalkulasi
    function hitungKeuntungan() {
        // Ambil nilai dari input, ubah ke float, default 0 jika kosong/invalid
        const hasilPenjualan = parseFloat(hasilPenjualanInput.value) || 0;
        const biayaBenih = parseFloat(biayaBenihInput.value) || 0;
        const biayaPakanPupuk = parseFloat(biayaPakanPupukInput.value) || 0;
        const biayaObat = parseFloat(biayaObatInput.value) || 0;
        const biayaTenagaKerja = parseFloat(biayaTenagaKerjaInput.value) || 0;
        const biayaLain = parseFloat(biayaLainInput.value) || 0;

        // Hitung total biaya
        const totalBiaya = biayaBenih + biayaPakanPupuk + biayaObat + biayaTenagaKerja + biayaLain;

        // Hitung keuntungan kasar
        const keuntunganKasar = hasilPenjualan - totalBiaya;

        // Tampilkan hasil
        totalBiayaOutput.textContent = formatRupiah(totalBiaya);
        keuntunganKasarOutput.textContent = formatRupiah(keuntunganKasar);

        // Ubah warna teks keuntungan berdasarkan hasil (untung/rugi)
        keuntunganKasarOutput.classList.remove('profit', 'loss'); // Hapus kelas sebelumnya
        if (keuntunganKasar >= 0) {
            keuntunganKasarOutput.classList.add('profit');
        } else {
            keuntunganKasarOutput.classList.add('loss');
        }

        // Tampilkan div hasil (jika sebelumnya disembunyikan)
        hasilKalkulasiDiv.style.display = 'block';
    }

    // Tambahkan event listener ke tombol hitung
    hitungButton.addEventListener('click', hitungKeuntungan);

    // Optional: Hitung otomatis saat nilai input berubah (bisa membebani jika banyak input)
    // form.addEventListener('input', hitungKeuntungan);

    // Sembunyikan hasil saat awal load (opsional)
    // hasilKalkulasiDiv.style.display = 'none';

}); // Akhir dari DOMContentLoaded
