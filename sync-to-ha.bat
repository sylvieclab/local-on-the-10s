@echo off
REM Sync Local on the 10s to Home Assistant
REM Usage: sync-to-ha.bat [ha-ip-address]

SET HA_IP=%1
IF "%HA_IP%"=="" SET HA_IP=10.10.10.191

SET SOURCE=custom_components\local_on_the_10s
SET DEST=/config/custom_components/local_on_the_10s

echo Syncing files to Home Assistant at %HA_IP%...
echo.

REM You'll need to install WinSCP or use SCP command
REM For now, this will just copy to a staging folder

echo Copying files to staging folder...
if not exist ".\deploy" mkdir ".\deploy"
xcopy /E /I /Y "%SOURCE%" ".\deploy\local_on_the_10s"

echo.
echo Files ready in .\deploy\local_on_the_10s
echo.
echo Next steps:
echo 1. Copy .\deploy\local_on_the_10s to your Home Assistant
echo 2. Or use SCP: scp -r .\deploy\local_on_the_10s root@%HA_IP%:/config/custom_components/
echo 3. Then restart Home Assistant
echo.

pause
