// https://stackoverflow.com/questions/52518298/how-to-create-a-script-mapper-in-keycloak
// https://stackoverflow.com/questions/48199539/best-way-to-test-debug-javascript-mappers-policies-in-keycloak
// https://docs.oracle.com/javase/10/nashorn/nashorn-java-api.htm#JSNUG119
// https://gist.github.com/Videl/222eff2f16383e2f318ecec2228d1008

var client = keycloakSession.getContext().getClient();
var forEach = Array.prototype.forEach;

// print(user.getRealmRoleMappings());

var isAdmin = false;


forEach.call(user.getRealmRoleMappings().toArray(), function (roleModel) {
  // print(roleModel.getName());

  if (roleModel.getName().contains("admin")) {
    isAdmin = true;
  }
});

if (isAdmin) {
  token.getOtherClaims().put("claimName", "admin");
} else {
  token.getOtherClaims().put("claimName", "normal_user");
}
