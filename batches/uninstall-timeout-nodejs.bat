C:\IQDVT_TEST\uninst.exe /S
echo %ERRORLEVEL%
echo ---------
C:\Windows\System32\ping 127.0.0.1
IF NOT EXIST C:\IQDVT_TEST (@echo true) ELSE (@echo false)