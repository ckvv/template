h3 模板

keytool -genkeypair -alias "aipc" -keyalg EC -sigalg SHA256withECDSA -dname "C=CN,O=HUAWEI,OU=HUAWEI IDE,CN=ide_demo_app"  -keystore /Users/chenkai/harmony_os/aipc.p12 -storetype pkcs12 -validity 9125 -storepass Shensikao -keypass Shensikao

java -jar path\app_packing_tool.jar --mode versionNormalize --input-list 1.hap,2.hsp --version-code 1000001 --version-name 1.0.1 --out-path path\out\

hdc shell aa force-stop com.shensikao.aipc4
hdc shell mkdir data/local/tmp/f894c632ee3945a2921cda4a14b4225e
hdc file send /Users/chenkai/DevEcoStudioProjects/aipc4/entry/build/default/outputs/default/entry-default-signed.hap "data/local/tmp/f894c632ee3945a2921cda4a14b4225e"
hdc shell bm install -p data/local/tmp/f894c632ee3945a2921cda4a14b4225e
hdc shell rm -rf data/local/tmp/f894c632ee3945a2921cda4a14b4225e
hdc shell aa start -a EntryAbility -b com.shensikao.aipc4
