# sistem-penilaian-pipk

## script

1. Migrations

    ```bash
    npx sequelize-cli model:generate --name user --attributes namalengkap:string,NIP:string,handphone:string,password:string,unitkerja:string,kewenangan:string,akun:string,foto:string
    
    npx sequelize-cli model:generate --name spm --attributes nomorspm:string
    
    npx sequelize-cli model:generate --name document --attributes namafile:string,jenis:string,ukuran:integer,spmId:integer
    
    ```
