@echo off
C:\IQDVT_TEST\uninst.exe /S
SET /A uninstExitCode=%ERRORLEVEL%
echo uninstExitCode value is %uninstExitCode%

C:\Windows\System32\timeout 2 > nul

IF NOT EXIST C:\IQDVT_TEST (SET notExist=true) ELSE (SET notExist=false)
echo notExist value is %notExist%

IF %uninstExitCode% == 0 (
	IF %notExist% == true (
		 @echo pass
	)
) ELSE (
	@echo failed
)

@REM pause