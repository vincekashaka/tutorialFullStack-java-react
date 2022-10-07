package vince.com.tutotialapi.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class UserInfoResponse {

    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String email;
    private List<String> roles;

    public UserInfoResponse(Long id, String username, String email, List<String> roles) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }
}
