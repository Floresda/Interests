$(document).ready(function() {
    const playerExamples = {
        qb: "Patrick Mahomes (KC)",
        rb1: "Derrick Henry (TEN)",
        rb2: "Alvin Kamara (NO)",
        wr1: "Cooper Kupp (LAR)",
        wr2: "Justin Jefferson (MIN)",
        te: "Travis Kelce (KC)",
        flex: "Christian McCaffrey (49ers)",
        k: "Brandon Aubrey (Cow)",
        dst: "Los Angeles Rams (LAR)"
      };

    $("#loginBtn").click(function() {
      const username = $("#username").val();
      const password = $("#password").val();
  

      if (username === "User" && password === "Football23") {
        $("#mainContent").show();
        $("#loginForm").remove();
      } else {
        $("#errorMsg").text("Invalid username or password");
      }
    });

    $("#playerForm label").mouseover(function() {
        const position = $(this).attr("for");
        const examplePlayer = playerExamples[position];
        $(this).text(position + ": Example " + examplePlayer);
      }).mouseout(function() {
        let position = $(this).attr("for");
        $(this).text(position + ":");
      });

    $("#optimizeBtn").click(function() {
      // Generate random points for each player (1-50)
      const qbPoints = Math.floor(Math.random() * 50) + 1;
      const rb1Points = Math.floor(Math.random() * 50) + 1;
      const rb2Points = Math.floor(Math.random() * 50) + 1;
      const wr1Points = Math.floor(Math.random() * 50) + 1;
      const wr2Points = Math.floor(Math.random() * 50) + 1;
      const tePoints = Math.floor(Math.random() * 50) + 1;
      const flexPoints = Math.floor(Math.random() * 50) + 1;
      const kPoints = Math.floor(Math.random() * 50) + 1;
      const dstPoints = Math.floor(Math.random() * 50) + 1;

      const totalScore = qbPoints + rb1Points + rb2Points + wr1Points + wr2Points + tePoints + flexPoints + kPoints + dstPoints;
      
      $("#optimizedLineup").html("");  
      $("#optimizedLineup").append("QB: " + $("#qb").val() + " (" + qbPoints + " pts)<br>");
      $("#optimizedLineup").append("RB1: " + $("#rb1").val() + " (" + rb1Points + " pts)<br>");
      $("#optimizedLineup").append("RB2: " + $("#rb2").val() + " (" + rb2Points + " pts)<br>");
      $("#optimizedLineup").append("WR1: " + $("#wr1").val() + " (" + wr1Points + " pts)<br>");
      $("#optimizedLineup").append("WR2: " + $("#wr2").val() + " (" + wr2Points + " pts)<br>");
      $("#optimizedLineup").append("TE: " + $("#te").val() + " (" + tePoints + " pts)<br>");
      $("#optimizedLineup").append("Flex: " + $("#flex").val() + " (" + flexPoints + " pts)<br>");
      $("#optimizedLineup").append("Kicker: " + $("#k").val() + " (" + kPoints + " pts)<br>");
      $("#optimizedLineup").append("Defense/ST: " + $("#dst").val() + " (" + dstPoints + " pts)<br>");

      $("#totalScore").text("Your total Fantasy score was: " + totalScore);
    });
  });
  