package vince.com.tutotialapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vince.com.tutotialapi.model.ERole;
import vince.com.tutotialapi.model.Role;

import java.util.Optional;

public interface RoleRepository  extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
