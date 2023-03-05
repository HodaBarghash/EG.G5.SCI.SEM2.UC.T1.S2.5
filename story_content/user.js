function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MSR7jUCver":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxCPUEEaHPGpBl8atlLU9Ni71Ax6Tk60t03MjcTKtYySp0Mz6riM_uOwSShzhOfmb_7/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

